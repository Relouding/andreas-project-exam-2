import PropTypes from "prop-types";
import Heading from "../layout/Heading";
import { StyleHeading } from "../layout/Heading"
import DashboardMenu from "./DashboardMenu";
import { ContainerPage } from "../layout/Container";
import { ContainerDashboard, ContainerMenu } from "../layout/StyleDashboard";

export default function DashboardPage({ children }) {
	return (
		<>
		    <ContainerPage>
			    <ContainerDashboard>
		            <StyleHeading>
			            <Heading content="Dashboard" />
			        </StyleHeading>
				    <ContainerMenu>
			            <DashboardMenu />
			            {children ? children : <p>Select a section</p>}
				    </ContainerMenu>
			    </ContainerDashboard>
		    </ContainerPage>
		</>
	);
}

DashboardPage.propTypes = {
	children: PropTypes.node,
};