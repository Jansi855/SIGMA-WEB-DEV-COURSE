let a = prompt ("Enter the 1st number")
let b = prompt("Enter the 2nd number")
let sum = parseInt(a) + parseInt(b)
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

function main() {
    let x = 5;
    try {
        console.log("The sum is", sum * x)
        return true
    
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false

    }
    finally {
        console.log("files are being closed and db connection is being closed")
    }

} 
let c = main()