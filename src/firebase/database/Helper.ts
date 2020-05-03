export const CheckUndefined = (model) => {
    let keys = Object.keys(model);

    for (let i = 0; i < keys.length; i++) {
        if (model[keys[i]] == undefined) {
            delete model[keys[i]];
        }
    }
};

export const Save = async (collection, model) => {
    const collectionRef = await collection.doc();
    const saveCollection = await collectionRef.set(Object.assign({}, model))
    if (saveCollection === undefined) {
        return await collectionRef.id
    }

}
export const GetById = async (collection, Id) => {
    return await collection.doc(Id).get().then((value) => value.data());
}
export const Delete = async (collection, Id) => {
    return await collection.doc(Id).delete();
}
export const Update = async (collection, model) => {
    let findedProduct = collection.doc(model.Id);
    return await findedProduct.update(Object.assign({}, model));
}
export const GetAll = async (collection, Code?) => {
    return await
        collection
            .where("Code", "==", Code)
            .get()
            .then((value) =>
                value.docs.map((doc) => {
                    let d = doc.data();
                    d.Id = doc.id;
                    return d;
                })
            );
}
export const GetAllByTc = async (collection, tc?) => {
    return await
        collection
            .where("TCNumber", "==", tc)
            .get()
            .then((value) =>
                value.docs.map((doc) => {
                    let d = doc.data();
                    d.Id = doc.id;
                    console.log("değer", d)
                    return d;
                })
            );
}