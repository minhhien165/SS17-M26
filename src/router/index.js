import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/HomeView.vue");
const About = () => import("@/views/AboutView.vue");
const Contact = () => import("@/views/ContactView.vue");
const Search = () => import("@/views/SearchView.vue");
const NotFound = () => import("@/views/NotFound.vue");
const Logon = () => import("@/views/Login.vue");
const Dashboard = () => import("@/views/DashBoard.vue");
const Users = () => import("@/views/Users.vue");
const Products = () => import("@/views/Products.vue");
const Settings = () => import("@/views/Settings.vue");
const ListPost = () => import("@/views/ListPost.vue");
const PostDetail = () => import("@/views/PostDetail.vue");
const PostNotFound = () => import("@/views/PostNotFound.vue");

const isLoggedIn = false;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/login",
    name: "Logon",
    component: Logon,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (isLoggedIn) {
        next();
      } else {
        next({ name: "Logon" });
      }
    },
    children: [
      {
        path: "manager-user",
        name: "Users",
        component: Users,
      },
      {
        path: "manager-product",
        name: "Products",
        component: Products,
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings,
      },
    ],
  },
  {
    path: "/posts",
    name: "ListPost",
    component: ListPost,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,

    beforeEnter: (to, from, next) => {
      const postId = parseInt(to.params.id);

      const posts = [1, 2, 3];
      if (posts.includes(postId)) {
        next();
      } else {
        next({ name: "PostNotFound" });
      }
    },
  },
  {
    path: "/post-not-found",
    name: "PostNotFound",
    component: PostNotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === "PostNotFound") {
      return { top: 0 };
    }
    if (from.name === "ListPost" && to.name === "PostDetail") {
      return { top: window.innerHeight / 2 };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
