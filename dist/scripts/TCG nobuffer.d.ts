import * as app from '../src/lib/CLIApplication';
export interface Iobject {
    id: string;
    center: Iposition;
    rotation: Iposition;
    vertices: Iposition[];
}
export interface Iposition {
    x: number;
    y: number;
    z: number;
}
export declare class TCG {
    data: app.Idata;
    camera: Iposition;
    objects: Iobject[];
    constructor(objects: Iobject[], props?: app.Iproperties);
    private rotateX;
    private rotateY;
    private rotateZ;
    private draw;
    private connectAndDraw;
    private drawLine;
    prerun(widget: app.Iwidget): void;
}
