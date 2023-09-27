var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
function addScript(src, wpCtn) {
    return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.setAttribute('src', src);
        s.setAttribute('wpContainer', wpCtn);
        s.addEventListener('load', resolve);
        s.addEventListener('error', reject);
        document.body.appendChild(s);
    });
}
function addCss(href) {
    var head = document.getElementsByTagName("head")[0] || document.documentElement;
    var customStyle = document.createElement("link");
    customStyle.href = href;
    customStyle.rel = "stylesheet";
    customStyle.type = "text/css";
    head.insertAdjacentElement("beforeEnd", customStyle);
}
var React18WpWebPart = (function (_super) {
    __extends(React18WpWebPart, _super);
    function React18WpWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    React18WpWebPart.prototype.render = function () {
        var _this = this;
        window.spContext = this.context;
        window.wpProperties = this.properties;
        try {
            this.properties.scripts.split(";").forEach(function (s) {
                addScript(s, _this.properties.rootElement);
            });
            this.properties.css.split(";").forEach(function (c) {
                addCss(c);
            });
        }
        catch (e) {
            console.log("errores al cargar");
        }
        this.domElement.innerHTML = "<div id=\"" + this.properties.rootElement + "\"></div>";
    };
    React18WpWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Descripcioón"
                    },
                    groups: [
                        {
                            groupName: "ReactApp files",
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: "Descripcion"
                                }),
                                PropertyPaneTextField('scripts', {
                                    label: "scripts"
                                }),
                                PropertyPaneTextField('css', {
                                    label: "css"
                                }),
                                PropertyPaneTextField('rootElement', {
                                    label: "root"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return React18WpWebPart;
}(BaseClientSideWebPart));
export default React18WpWebPart;

//# sourceMappingURL=ReactAppLoaderWebPart.js.map
