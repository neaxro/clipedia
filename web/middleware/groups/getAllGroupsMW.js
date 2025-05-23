/**
 * Lists all groups from database.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        const dummy_groups = [
            {
                id: 1,
                name: "Debian",
                icon_link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fdebian-logo.png&f=1&nofb=1&ipt=db3be22e58478195b6993d1eed38b6d6c4f86deb9aeee0c921fda82734a97156&ipo=images",
                description: "A popular and stable Linux distribution known for its robustness and extensive package ecosystem."
            },
            {
                id: 2,
                name: "Kubernetes",
                icon_link: "https://i1.wp.com/blog.knoldus.com/wp-content/uploads/2021/09/Kubernetes-logo.png?w=1024&ssl=1",
                description: "An open-source system for automating deployment, scaling, and management of containerized applications."
            },
            {
                id: 3,
                name: "Docker",
                icon_link: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png",
                description: "A platform for developing, shipping, and running applications inside lightweight, portable containers."
            },
            {
                id: 4,
                name: "Helm",
                icon_link: "https://cylab.be/storage/blog/195/files/KCtQ4g5m5MYY30tc/logo-helm.png",
                description: "A package manager for Kubernetes that simplifies the deployment and management of applications."
            }
        ];

        res.locals.groups = dummy_groups;

        // TODO: Implement db call for listing all groups.
        console.log('Fetching all groups from database...');
        return next();
    };
};
