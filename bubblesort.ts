function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    // let bubbleSort: (i: number, n: number, a: number[]) => {
    let numberOfSwaps: number = 0;
    for (let i=0; i<n; i++) {        
        for (let j=0; j<n-1; j++) {
            if (a[j] > a[j+1]) {
                // console.log(numberOfSwaps+' swap, array is '+a);
                a[j] = a[j] + a[j+1];
                a[j+1] = a[j] - a[j+1];
                a[j] = a[j] - a[j+1];
                numberOfSwaps++;
            }
        }
        if (numberOfSwaps === 0) {
            break;
        }
    }
    
    console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
    console.log('First Element: '+ a[0]);
    console.log('Last Element: '+ a[n-1]);
    
}