/**
 * Represents the data of a bike product.
 */
class Bike {
    /**
     * Gets the name of the bicycle.
     */
    get Name() {
        return this.name;
    }

    /**
     * Gets the name of the bicycle.
     */
    get ThumbnailUrl() {
        return this.thumbnailUrl;
    }

    /**
     * Gets the price of the bicycle.
     */
    get Price() {
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

    get Specs() {
        return this.specs;
    }

    static get Instances() {
        return Bike.instances;
    }

    static set Instances(value) {
        Bike.instances = value;
    }

    /**
     * Initializes a new instance of the Bike class.
     * @param {string} name The name of the product
     * @param {number} price The price of the product
     * @param {string[]} colors The available colors
     * @param {object} specs The specs of the bike.
     */
    constructor(name, thumbnailUrl, price, colors, specs) {
        this.name = name;
        this.thumbnailUrl = thumbnailUrl;
        this.price = price;
        this.colors = colors;
        this.specs = specs;
    }

    static CreateTestData() {
        Bike.Instances["Kids Baik"] = new Bike("Kids Baik", 'img/Kids.jpg', 399, ['#CCC', '#FF29FF', '#FF0077'], {frame: {title: 'Frame', description: 'Some frame.'}});
        Bike.Instances["Speed Demon"] = new Bike("Speed Demon", 'img/Downhill.jpg', 999, ['#CCC', '#00FFFF'], {frame: {title: 'Frame', description: 'Very good frame.'}});
        Bike.Instances["Blazing Speedster"] = new Bike("Blazing Speedster", 'img/Enduro hardtail.jpg', 10000, ['#CCC', '#F6FF00'], {});
        Bike.Instances["Street Stitcher"] = new Bike("Street Stitcher", 'img/Street.jpg', 20000, ['#CCC', '#00FF89'], {});
    }
}

Bike.instances = {};