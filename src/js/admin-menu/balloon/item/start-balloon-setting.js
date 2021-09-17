import AddItem from './add-item';
import './_start-balloon-setting.scss';

const StartBalloonSetting = () => {
	return (
		<div className="ystdb-menu-balloon__item ystdb-menu-balloon__start">
			<p>「追加」ボタンをクリックして吹き出し設定を追加しましょう</p>
			<div className="ystdb-menu-balloon__start-button">
				<AddItem />
			</div>
		</div>
	);
};

export default StartBalloonSetting;
