import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline,
ThemeProvider,
createTheme, 
Container} from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children, title})=>{

    // custom theme
    const theme = createTheme({
        palette:{
            
        }
    })

    return (
        <div className="layout">
            <Head>
                <title>
                    {title ? `Project Grid: ${title}`: 'Project Grid'}
                </title>
            </Head>
            <ThemeProvider theme={theme}>
            <CssBaseline/>
                <div>
                    <Container>
                        <Sidebar/>
                    </Container>
                    <Container>
                        {children}
                    </Container>
                </div>
            </ThemeProvider>
        </div>
    )
};

export default Layout;