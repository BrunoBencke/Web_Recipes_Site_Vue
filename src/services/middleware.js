import Cookie from "js-cookie"

export default {
    async auth(to, from, next) {
        const token = Cookie.get('_app_token');
        var statusCode;

        await fetch(process.env.VUE_APP_API_BASE_URL + "/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            statusCode = response.status
        });

        if (statusCode != 200) {
            next('/login');
        }

        if (!token) {
            next('/login');
        }

        next();
    }
}