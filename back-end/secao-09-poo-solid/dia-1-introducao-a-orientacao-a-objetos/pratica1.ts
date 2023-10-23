class Tv {
  brand: string;
  size: number;
  resolution: string;
  conections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[], ct?: string) {
    console.log(`Creating TV ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.conections = c;
    this.connectedTo = ct;
  }

  turnOn() {
    console.log(`${this.brand}: TV is on`);
  }
}

const tv1 = new Tv('Samsung', 42, '4K', ['HDMI', 'USB']);
tv1.turnOn();