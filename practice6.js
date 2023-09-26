var signal = "green";

switch (signal) {
    case 'red':
        console.log("Danger!! Don't cross the road.")
        break;
    case 'yellow':
        console.log("Stop! Don't cross the road.");
        break;
    case 'green':
        console.log("Go Ahead. Now you can cross the road.");
        break

    default:
        console.log("Wait for signal.")
        break;
}