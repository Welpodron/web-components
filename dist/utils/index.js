export const deferredPromise = () => {
    let outsideResolver;
    const promise = new Promise((innerResolver) => {
        outsideResolver = innerResolver;
    });
    promise.resolve = () => {
        outsideResolver();
    };
    return promise;
};
//# sourceMappingURL=index.js.map