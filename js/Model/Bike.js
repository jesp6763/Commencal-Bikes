/**
 * Represents the data of a bike product.
 */
class Bike {
    /**
     * 
     * @param {string} name The name of the product
     * @param {number} price The price of the product
     * @param {string[]} colors The available colors
     * @param {object} specs The specs of the bike.
     */
    constructor(name, price, colors, specs) {
        this.name = name;
        this.price = price;
        this.colors = colors;
        this.specs = specs;
    }

    /**
     * Gets the name of the bicycle.
     */
    get Name(){
        return this.name;
    }
    
    /**
     * Gets the price of the bicycle.
     */
    get Price(){
        return this.price;
    }
    
    /**
     * Returns a string array of colors (in hex format), or a string if there is no colors.
     */
    get Colors() {
        if (this.colors.length > 0) {
            return this.colors;
        }
        else {
            return "N/A";
        }
    }

    get Specs(){
        return this.specs;
    }

    static get Instances(){
        return Bike.instances;
    }

    static set Instances(value){
        Bike.instances = value;
    }
}

Bike.instances = {};