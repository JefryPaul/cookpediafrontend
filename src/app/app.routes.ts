import { Routes } from '@angular/router';
import { Home } from './common/pages/home/home';
import { About } from './common/pages/about/about';
import { Contact } from './common/component/contact/contact';
import { Login } from './common/pages/login/login';
import { Pagenotfound } from './common/pages/pagenotfound/pagenotfound';
import { Profile } from './users/pages/profile/profile';
import { Recipes } from './users/pages/recipes/recipes';
import { Register } from './users/pages/register/register';
import { SavedRecipe } from './users/pages/saved-recipe/saved-recipe';
import { ViewedRecipe } from './users/pages/viewed-recipe/viewed-recipe';

export const routes: Routes = [{
path:"",component:Home
},
{
path:"about",component:About
},
{
path:"contact",component:Contact
},
{
path:"login",component:Login
},

//users
{
path:"profile",component:Profile
},
{
path:"recipe",component:Recipes
},
{
path:"register",component:Register
},
{
path:"saved-recipe",component:SavedRecipe
},
{
path:"viewed/:id/recipe",component:ViewedRecipe
},


{
path:"**",component:Pagenotfound
}
];
