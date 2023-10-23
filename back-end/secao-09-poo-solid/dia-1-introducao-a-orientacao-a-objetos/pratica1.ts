class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[], ct?: string) {
    console.log(`Creating TV ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = ct;
  }

  turnOn():void {
    `TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \n\
      available connections: ${this.connections}`
  }
}

const tv1 = new Tv('Samsung', 42, '4K', ['HDMI', 'USB']);
tv1.turnOn();