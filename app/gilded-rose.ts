export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  //increase quality(byN) > only increases/decreases if it's >=0 and <=50
  //decrease sellIn

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      switch(true) {

        case (this.items[i].name === 'Sulfuras, Hand of Ragnaros'):
          break;

        case (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'):
          if (this.items[i].quality < 50) {
            switch (true) {
              case (this.items[i].sellIn <= 0):
                this.items[i].quality = 0
                break;
              case (this.items[i].sellIn > 0):
                this.items[i].quality++;
                if (this.items[i].sellIn <= 5 && this.items[i].quality < 50) {
                  this.items[i].quality++;
                }
                if (this.items[i].sellIn <= 10 && this.items[i].quality < 50) {
                  this.items[i].quality++;
                }
                break;
            }
          }
          this.items[i].sellIn--;
          break;

        case (this.items[i].name === 'Aged Brie'):
          if (this.items[i].quality < 50) {
            this.items[i].quality++;
          }  
          this.items[i].sellIn--;
          break;

        case (this.items[i].name.includes('Conjured')):
          if (this.items[i].quality > 0) {
            this.items[i].quality -= 2;
            if (this.items[i].sellIn <= 0) {
              this.items[i].quality -= 2;
            }
          }
          this.items[i].sellIn--;
          break;
      
        default:
          if (this.items[i].quality > 0) {
            this.items[i].quality--;
            if (this.items[i].sellIn <= 0) {
              this.items[i].quality--;
            }
          }
          this.items[i].sellIn--;
          break;
      }
    
    }

    return this.items;
  }
}