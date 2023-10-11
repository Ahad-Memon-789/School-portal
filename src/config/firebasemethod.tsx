import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { app } from "./firebaseconfig";
import { resolve } from "path";

const auth = getAuth(app);
const db = getDatabase(app)

export let fbSignIn = (body: any) => {
    return new Promise<any>((resolve, reject) => {
        if (!body.email || !body.password) {
            reject("please enter Email or Password")
        } else {
            signInWithEmailAndPassword(auth, body.email, body.password)
                .then(res => {
                    let id = res.user.uid

                    body.id = id
                    resolve(res)
                    const referece = ref(db, `users/${id}`)

                    onValue(referece, (data) => {
                        if (data.exists()) {
                            resolve('user created succesfully')
                        } else {
                            reject("No Data Found")
                        }
                    })

                }).catch(err => {
                    reject('ahad')
                })
        }
    })
}
export let fbSignUp = (body: any) => {
    return new Promise<any>((resolve, reject) => {
        if (!body.email || !body.password) {
            reject("please enter Email or Password")
        } else {
            createUserWithEmailAndPassword(auth, body.email, body.password)
                .then(res => {
                    let id = res.user.uid
                    body.id = id
                    const referece = ref(db, `users/${id}`)
                    set(referece, body)
                        .then(user => {
                            resolve('You are signup successed  ')
                        })
                        .catch(errs => {
                            reject('errs')
                        })
                        .catch(err => {
                            reject('err')
                        })
                })
        }
    })
}
export const fbAdd = (nodeNames: string, body: any, id?: string) => {
    return new Promise<any>((resolve, reject) => {
        const TaskId = push(ref(db, `${nodeNames}/`)).key
        body.id = TaskId
        const reference = ref(db, `${nodeNames} / ${body.id}`)
        set(reference, body)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const fbGet = (nodeName: string, id?: any) => {
    return new Promise<any>((resolve, reject) => {
        const referece = ref(db, `${nodeName} /${id ? id : ''}`)
        onValue(referece, (data) => {
            if (data.exists()) {
                resolve(Object.values(data.val()))
            } else {
                reject('Data Not Get :(')
            }
        })
    })
}
export function fbAuth() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                resolve(uid);

            } else {
                reject("No User is logged in");
            }
        });
    });
}