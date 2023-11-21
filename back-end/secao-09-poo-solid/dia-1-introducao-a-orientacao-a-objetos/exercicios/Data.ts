class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    // const dateString = `${year}-${month}-${day}`;
    // if(new Date(dateString).getDate() !== day) {
    //   this._day = 1;
    //   this._month = 1;
    //   this._year = 1900;
    // } else {
    // this._day = day;
    // this._month = month;
    // this._year = year;
    // }

    if(!Data.validateDate(day, month, year)) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  get day(): number {
    return this.day;
  }

  set day(newDay: number) {
    if (newDay < 1 || newDay > 31) {
      throw new Error('Dia inválido.');
    }
    this._day = newDay;
  }

  get month(): number {
    return this.month;
  }

  set month(newMonth: number) {
    if (newMonth < 1 || newMonth > 12) {
      throw new Error('Mês inválido.');
    }
    this._month = newMonth;
  }

  get year(): number {
    return this.year;
  }

  set year(newYear: number) {
    if (newYear < 1) {
      throw new Error('Ano inválido.');
    }
    this._year = newYear;
  }

  getMonthName(): string {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return months[this._month - 1];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;

  }

  compare(date: Data): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;

    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }
    format(formatting: string): string {
      const conditions: boolean[] = [
        (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
        (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
        (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
      ];
  
      if (conditions.every((cond) => cond)) {
        throw new Error(`O formato passado é inválido: ${formatting}`);
      }
  
      const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
      const month = this.month > 9 
        ? this.month.toString() 
        : `0${this.month.toString()}`;
  
      const year = this.year.toString();
  
      const dateFormatting = formatting
        .replace('dd', day).replace('mm', month)
        .replace('M', this.getMonthName()).replace('aaaa', year)
        .replace('aa', year.substr(-2));
  
      return dateFormatting;
    }
  
    // esse método é estático pois ele não precisa acessar o `this` em momento algum
    // logo, não precisa estar vinculado a nenhuma instância
    private static validateDate(day: number, month: number, year: number)
      : boolean {
      const dateStr = `${year}-${month}-${day}`;
  
      if (new Date(dateStr).getDate() !== day) return false;
  
      return true;
    }
  }
  
  // Para testar!
  
  const testDate = new Data(29, 1, 1989);
  
  console.log(testDate);
  console.log('Dia: ', testDate.day);
  console.log('Mês: ', testDate.month);
  console.log('Mês por extenso: ', testDate.getMonthName());
  console.log('Ano: ', testDate.year);
  console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
  console.log(testDate.format('dd/mm/aaaa'));
  console.log(testDate.format('dd-mm-aaaa'));
  console.log(testDate.format('aaaa/mm/dd'));
  console.log(testDate.format('aaaa-mm-dd'));
  console.log(testDate.format('dd de M de aa'));
  console.log(testDate.format('dd, M de aaaa'));
  
  const otherDate = new Data(30, 1, 2021);
  
  const compared = testDate.compare(otherDate);
  
  const compareStates = ['anterior', 'igual', 'posterior'];
  
  console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);
  
  // data inválida
  const invalidDate = new Data(31, 2, 2021);
  
  console.log('Teste data inválida: ', invalidDate);
  
  // formato inválido
  console.log(invalidDate.format('a m d'));