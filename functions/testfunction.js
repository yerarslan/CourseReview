exports.handler = async function (event, context) {
    console.log("it working");
    return { statusCode: 200, body: "We are now split testing" };
};
