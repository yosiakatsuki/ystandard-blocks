export const previewStyles = `
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
    .ystdb-btn-link img {
      position: absolute;
    }
`;