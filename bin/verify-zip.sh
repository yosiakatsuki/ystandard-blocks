#!/usr/bin/env bash

set -euo pipefail

archive="${1:-ystandard-blocks.zip}"
archive_root="ystandard-blocks/"

# ZIP生成に失敗してファイルが存在しない場合は、以降の検証を中断する。
if [[ ! -f "${archive}" ]]; then
	echo "配布ZIPが見つかりません: ${archive}" >&2
	exit 1
fi

entries="$(zipinfo -1 "${archive}")"
unexpected_entries="$(printf '%s\n' "${entries}" | grep -Ev "^${archive_root}" || true)"

# WordPressへの展開先が崩れないように、単一のプラグインディレクトリ配下だけを許可する。
if [[ -n "${unexpected_entries}" ]]; then
	echo "配布ZIPのルート外にファイルがあります:" >&2
	printf '%s\n' "${unexpected_entries}" >&2
	exit 1
fi

required_entries=(
	"${archive_root}ystandard-blocks.php"
	"${archive_root}inc/load.php"
	"${archive_root}assets/"
	"${archive_root}build/"
	"${archive_root}css/"
	"${archive_root}js/"
	"${archive_root}languages/"
	"${archive_root}library/"
)

for required_entry in "${required_entries[@]}"; do
	# 実行に必要なファイルや資産の足し忘れをZIP生成時点で検出する。
	if ! printf '%s\n' "${entries}" | grep -Fqx "${required_entry}"; then
		echo "配布ZIPに必須のファイルまたはディレクトリがありません: ${required_entry}" >&2
		exit 1
	fi
done

forbidden_pattern="^${archive_root}(AGENTS\.md|CLAUDE\.md|README\.md|eslint\.config\.cjs|tsconfig\.tsbuildinfo|ystandard-blocks[^/]*\.json|tests(/|$)|docs(/|$)|archived(/|$)|release-posts(/|$)|.*\.map$|.*\.zip$)"
forbidden_entries="$(printf '%s\n' "${entries}" | grep -E "${forbidden_pattern}" || true)"

# 除外設定の変更やパターン漏れで開発用ファイルが再混入した場合は失敗させる。
if [[ -n "${forbidden_entries}" ]]; then
	echo "配布ZIPに不要なファイルが含まれています:" >&2
	printf '%s\n' "${forbidden_entries}" >&2
	exit 1
fi

unzip -tq "${archive}"
echo "配布ZIPの内容を確認しました: ${archive}"
