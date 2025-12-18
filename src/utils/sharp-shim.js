// Shim for sharp module in SSR environment
// sharp is only needed for image processing, which is not used in this project
// Support both CommonJS and ES modules
export default {};
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {};
}

