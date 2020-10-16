export default class Counter {
  constructor() {
    this.count = 0;
  }

  async setCountFromDatabase() {
    const response = await fetch('https://url/count');
    const { count }: { count: number } = await response.json();
    this.count = count;
  }
 
  increment() {
    this.count += 1;
  }
}
