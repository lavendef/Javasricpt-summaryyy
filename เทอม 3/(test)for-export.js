function sayhi(namehere) {
    return `Hi ${namehere}. How are you today?`
}
function tellme(something) {
    return `You tell me that you ${something} !!`
}

// module.exports ver.1 (export by default)
// module.exports = sayhi

// module.exports ver.2 (export by object format)
// module.exports = {tellme}

// module.exports ver.2-5 (export 1-n program unit)
// module.exports = {sayhi,tellme}

// ------------------------------ ES module zone ---------------------------------
// ใน exports ver.1 (export default or export {module as default})
// ก็สามารถเขียนได้แบบนี้เหมือนกัน
`export default`;function tellme2(something) {
    return `I might tell them that I ${something}`
}
// ใน exports ver.2 (export default or export {module as default})
// ก็สามารถเขียนได้แบบนี้เหมือนกัน
`export`;function callback(something) {
    return `I heard that you say ${something},WTF is happening??`
}

// exports ver.1 (export default or export {module as default})
// export {tellme2 as default}

// exports ver.2 (Named Export (export module or export {module,...(n module)})
// export {callback}
// ใน ณ ที่นี้เราสามารถส่งออกไปหลายโมดูลได้ แต่เอาส่งแค่อันเดียวก่อน

// export ver.3 (export {module as somename})
export {tellme2 as mighttell,callback}