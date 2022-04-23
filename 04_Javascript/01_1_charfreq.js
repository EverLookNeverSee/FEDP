/**
 * This Node program reads text from standard input, computes the frequency
 * of each letter in that text, and displays a histogram of the most
 * frequently used characters. It requires Node 12 or higher to run.
 *
 * In a Unix-type environment you can invoke the program like this:
 * node charfreq.js < corpus.txt
 */


// This class extends Map so that the get() method returns the specified
// value instead of null when the key is not in the map
class DefaultMap extends Map{
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key){
        if (this.has(key)){
            return super.get(key);
        }
        else {
            return this.defaultValue;
        }
    }
}
