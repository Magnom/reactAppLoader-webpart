import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IReactAppLoaderWebPartProps {
    description: string;
    scripts: string;
    css: string;
    rootElement: string;
}
declare global  {
    interface Window {
        spContext: any;
        wpProperties: any;
    }
}
export default class React18WpWebPart extends BaseClientSideWebPart<IReactAppLoaderWebPartProps> {
    render(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
