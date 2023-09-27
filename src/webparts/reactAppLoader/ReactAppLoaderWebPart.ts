import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';


export interface IReactAppLoaderWebPartProps {
  description: string;
  scripts:string;
  css:string;
  rootElement:string;
}

function addScript(src: string,wpCtn: string) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');

    s.setAttribute('src', src);
    s.setAttribute('wpContainer', wpCtn);
    s.addEventListener('load', resolve);
    s.addEventListener('error', reject);

    document.body.appendChild(s);
  });
}
function addCss(href: string) {
  const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
  let customStyle: HTMLLinkElement = document.createElement("link");
  customStyle.href = href;
  customStyle.rel = "stylesheet";
  customStyle.type = "text/css";
  head.insertAdjacentElement("beforeEnd", customStyle);
  
}
declare global {
  interface Window { spContext: any; wpProperties:any }
}

export default class React18WpWebPart extends BaseClientSideWebPart<IReactAppLoaderWebPartProps> {

  
  public render(): void {

    window.spContext = this.context;
    window.wpProperties = this.properties;

    try {
    this.properties.scripts.split(";").forEach((s)=>{
      addScript(s,this.properties.rootElement);
    });

    this.properties.css.split(";").forEach((c)=>{
      addCss(c);
    });
    }
    catch(e){
      console.log("errores al cargar");
    }

    this.domElement.innerHTML = "<div id=\"" + this.properties.rootElement + "\"></div>";
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
