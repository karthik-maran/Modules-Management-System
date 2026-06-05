import { Link } from "react-router-dom";
import {Theme,Header,Search,HeaderMenuButton,HeaderName,HeaderNavigation,HeaderMenuItem,HeaderMenu,HeaderGlobalAction,HeaderGlobalBar} from "@carbon/react";
import {
  Help,
  Login,
  UserMultiple,
  Notification,
  UserAvatar
} from "@carbon/icons-react";

import '@carbon/styles/css/styles.css';
import '../styles/navbar.css';

function Navbar(){
return(
    <Theme theme="g100">
    <Header className="custom-header" >
        
        <HeaderMenuButton/>
        <HeaderName prefix="">Self Talk Psychologist </HeaderName>
        <Search className="custom-search"/>
        <HeaderNavigation >
            <HeaderMenuItem>catalog</HeaderMenuItem>
         
        </HeaderNavigation>
           <HeaderMenu menuLinkName="select Campas">

            </HeaderMenu>
            <HeaderName prefix="">Dr B Ramesh</HeaderName>
             <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Help">
          <Help size={20} />
        </HeaderGlobalAction>

        <HeaderGlobalAction aria-label="Login">
          <Login size={20} />
        </HeaderGlobalAction>

        <HeaderGlobalAction aria-label="Users">
          <UserMultiple size={20} />
        </HeaderGlobalAction>

        <HeaderGlobalAction aria-label="Notifications">
          <Notification size={20} />
        </HeaderGlobalAction>

        <HeaderGlobalAction aria-label="Profile">
          <UserAvatar size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
    </Theme>
)
}
export default Navbar;