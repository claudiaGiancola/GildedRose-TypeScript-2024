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
  // increaseQuality(item: Item) {
  //   item.quality 
  // }

  // decreaseQuality(item: Item) {
    
  // }

  updateQuality() {
    this.items.forEach(item => {

      switch(true) {

        case (item.name === 'Sulfuras, Hand of Ragnaros'):
          break;

        case (item.name === 'Backstage passes to a TAFKAL80ETC concert'):
          if (item.quality < 50) {
            
                  item.sellIn <= 5 ? item.quality ++ : item.quality;
                  item.sellIn <= 10 ? item.quality += 2 : item.quality;
                  item.sellIn > 10 ? item.quality++ : item.quality;
                  
                  item.quality = Math.min(item.quality, 50);

                  item.sellIn <= 0 ? item.quality = 0 : item.quality;
                
          }
          item.sellIn--;
          break;

        case (item.name === 'Aged Brie'):
          item.quality < 50 ? item.quality++ : item.quality;

          item.quality = Math.min(item.quality, 50);
          
          item.sellIn--;
          break;

        case (item.name.includes('Conjured')):
          item.quality > 0 ? item.quality -= 2 : item.quality;
          item.sellIn <= 0 ? item.quality -= 2 : item.quality;

          item.quality = Math.max(item.quality, 0);
          
          item.sellIn--;
          break;
      
        default:
          item.quality > 0 ? item.quality-- : item.quality;
          item.sellIn <= 0 ? item.quality-- : item.quality;
              
          item.quality = Math.max(item.quality, 0);
          
          item.sellIn--;
          break;
      }
    });

    return this.items;
  }
}