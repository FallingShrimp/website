module.exports = {
    hooks: {
        readPackage(pkg) {
            if (pkg.name === "vue-server-renderer") {
                pkg.dependencies = pkg.dependencies || {};
                pkg.dependencies.vue = "2.7.16";
            }
            return pkg;
        },
    },
};
