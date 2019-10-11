/**
 * Font Awesome のリストを作成するスクリプト
 */

let fs = require('fs');
const faIconDir = './library/fontawesome/svgs/';
const jsonPath = './src/js/components/icon-select/icons.json';
const dirList = ['brands', 'regular', 'solid'];
const iconClass = {
    brands: 'fab',
    regular: 'far',
    solid: 'fas'
};
let icons = [];
/**
 * アイコンの一覧取得 & リスト作成
 */
dirList.map((value) => {
    const dir = faIconDir + value;
    const files = fs.readdirSync(dir);
    const fileList = files.filter(function (file) {
        return fs.statSync(dir + '/' + file).isFile() && /.*\.svg$/.test(file);
    });
    fileList.map((file) => {
        const iconName = file.replace('.svg', '');
        const iconClassName = iconClass[value] + ' fa-' + iconName;
        icons.push({
            name: iconName,
            class: iconClassName
        });
    });
});
/**
 * JSONファイルの作成
 */
fs.writeFile(jsonPath, JSON.stringify(icons), (err, data) => {
    if (err) console.log(err);
    else console.log('write end');
});