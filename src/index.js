import stream from 'stream';

export default class XIconTransform extends stream.Transform {
    constructor() {
        super({ objectMode: true });

        this.buffer = new Buffer(0);
    }

    _transform(chunk, encoding, done) {
        this.buffer = Buffer.concat([this.buffer, chunk]);

        let retVal = this.tryTransform();
        while(retVal) {
            this.push(retVal);
            retVal = this.tryTransform();
        }

        done();
    }

    tryTransform() {
        if(this.buffer.length < 8) return null;
        const width = this.buffer.readUInt32LE(0);
        const height = this.buffer.readUInt32LE(4);

        if(this.buffer.length < 8 + width*height * 4) return null;
        const data = this.buffer.slice(8, 8 + width*height * 4);
        this.buffer = this.buffer.slice(8 + width*height * 4);

        return { width, height, data };
    }
}
