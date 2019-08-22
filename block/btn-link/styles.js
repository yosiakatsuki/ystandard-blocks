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
    .has-text-align-center {
        text-align: center;
    }
    .has-text-align-right {
        text-align: right;
    }
    .ystdb-btn-link {
      position: relative;
      display: inline-block;
      border-radius: 4px;
    }
    .ystdb-btn-link.-block {
      display: block;
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
    .wp-block-button .ystdb-btn-link.-block.-has-icon a {
      padding-right: 3.5rem;
      padding-left: 3.5rem;
    }
    .ystdb-btn-link__icon {
      position: absolute;
      font-size: 1.25rem;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      height: auto;
    }
    .ystdb-btn-link.-block .ystdb-btn-link__icon {
      right: 2rem;
    }
    .ystdb-btn-link img {
      position: absolute;
    }
`;