describe('sortFunction', () => {
    it('should return a sorted array [2, 3, 5, 6, 8, 10]', () => {
        let array = [5, 8, 10, 3, 2, 6];
        let result = sortFunction(array);
        let sortedArray = [2, 3, 5, 6, 8, 10];
        expect(result).toEqual(sortedArray);
    })
    it('should return a sorted array [1, 2, 4, 5, 6, 6, 8, 9, 12]', () => {
        let array = [1, 6, 4, 12, 9, 8, 6, 5, 2];
        let result = sortFunction(array);
        let sortedArray = [1, 2, 4, 5, 6, 6, 8, 9, 12];
        expect(result).toEqual(sortedArray);
    })
    it('should return a sorted array [0, 5, 10, 15, 20, 25, 30, 35]', () => {
        let array = [10, 30, 20, 15, 5, 35, 25, 0];
        let result = sortFunction(array);
        let sortedArray = [0, 5, 10, 15, 20, 25, 30, 35];
        expect(result).toEqual(sortedArray);
    })
    it('should return a sorted array [1, 2, 3]', () => {
        let array = [1, 2, 3];
        let result = sortFunction(array)
        let sortedArray = [1,2,3];
        expect(result).toEqual(sortedArray);
    })
    it('should return a sorted array [1, 2, 3, 4, 5]', () => {
        let array = [5, 4, 3, 2, 1];
        let result = sortFunction(array)
        let sortedArray = [1, 2, 3, 4, 5];
        expect(result).toEqual(sortedArray);
    })
})