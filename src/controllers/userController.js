import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async(req, res) => {
    // create가 끝나는 걸 기달려줘야 해서 async 씀
    const { name, username, email, password, location } = req.body;
    await User.create({
        name, 
        username, 
        email, 
        password, 
        location
        // 데이터 전달⤴
    })
    return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
// delete는 변수명에 있어서 remove로 바꿔줌.
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");