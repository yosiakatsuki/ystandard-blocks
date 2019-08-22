/**
 * プレビューボタンのスタイル
 */
export const previewStyles = `
    @import url("https://use.fontawesome.com/releases/v5.10.1/css/all.css");
    html,body,:root {
        margin: 0 !important;
        padding: 0 !important;
        overflow: visible !important;
        min-height: auto !important;
    }
    .wp-block-button a {
        display: inline-block;
        padding: .5rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        -webkit-transition: all .3s;
        transition: all .3s;
        border-width: 1px;
        border-style: solid;
    }
    .wp-block-button a:not(.has-background) {
        background-color: #222;
        border-color: #222;
    }
    .wp-block-button a:not(.has-text-color) {
        color: #fff;
    }
    .ystdb-btn-link {
      position: relative;
      display: inline-block;
      border-radius:4px;
    }
    .wp-block-button .ystdb-btn-link a {
      display: block;
      background-color: transparent;
      border-color: inherit;
      color: inherit;
    }
    .wp-block-button .ystdb-btn-link.-has-icon a {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .ystdb-btn-link__icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      font-size: 1.25rem;
      transform: translateY(-50%);
    }
    .ystdb-btn-link img {
      position: absolute;
      top:0;
      left:0;
    }
    .has-text-align-center {
        text-align: center;
    }
    .has-text-align-right {
        text-align: right;
    }
`;