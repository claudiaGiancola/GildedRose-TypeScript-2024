import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Common item', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('foo');
  });

  // An item that is not Brie, sulfuras or backstage
  // each day: -1 Quality, (after SellIn <0) -2 Quality
  it('should decrease quality and sellIn', () =>{
    const gildedRose = new GildedRose([new Item('Tulip', 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Tulip');
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(49);
  });

  it('quality decreses by two when sellIn is zero or less', () =>{
    const gildedRose = new GildedRose([new Item('Rose', 0, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Rose');
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(48);
  });

  it('quality does not go below zero', () =>{
    const gildedRose = new GildedRose([new Item('Rose', -3, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Rose');
    expect(items[0].sellIn).to.equal(-4);
    expect(items[0].quality).to.equal(0);
  });
});

describe('Aged Brie', () => {
  // Aged Brie each day: +1 Quality (up to 50)
  it('Aged Brie increses Quality when sellIn decreases', () =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 4, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Aged Brie');
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(21);
  });

  it('Aged Brie max Quality 50', () =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 3, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Aged Brie');
    expect(items[0].sellIn).to.equal(2);
    expect(items[0].quality).to.equal(50);
  });
});


describe('Backstage passes', () => {
  // An item that is backstage
  // each day: [if SellIn < 11] +1 Quality (up to 50); [if SellIn <6] +2 Quality; [if SellIn < 5] +3 Quality; [if SellIn < 0] Quality = 0
  it('Backstage increases by 1 when SellIn is > 10', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 12)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).to.equal(19);
    expect(items[0].quality).to.equal(13);
  });

  it('Backstage increases by 2 when SellIn is <= 10', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 33)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(35);
  });

  it('Backstage increases by 3 when SellIn is <= 5', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 42)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(45);
  });

  it('Backstage Quality is 0 when SellIn is <= 0', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 42)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  it('Backstage Quality does not go over 50', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 49)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).to.equal(2);
    expect(items[0].quality).to.equal(50);
  });

  it('Backstage max Quality 50', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).to.equal(2);
    expect(items[0].quality).to.equal(50);
  });

  //TO BE IMPLEMENTED IN REFACTORING > throw error if quality is >50
  it('Backstage cannot increase after 50', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 51)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(51); //<= 50
  });
});

describe('Sulfuras', () => {
  // An item that is sulfuras
  // always Quantity === 80
  it('Sulfuras quality does not change', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equals(80);
    expect(items[0].sellIn).to.equals(0);
  });
  
  it('Sulfuras quality does not change', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 20, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equals(80);
    expect(items[0].sellIn).to.equals(20);
  });
});

describe('Conjured items', () => {
  it('Conjured items degrade twice as fast', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equals(9);
    expect(items[0].quality).to.equals(38);
  });

  it('Conjured items degrade four times as fast when sellIn is zero or less', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -1, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equals(-2);
    expect(items[0].quality).to.equals(6);
  });

});