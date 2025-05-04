import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // article start
  aTitle: {
    lineHeight: "1.25rem",
    fontStyle: "italic",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "1.125rem",
    paddingLeft: "0.75rem",
    borderLeft: "2px solid #E02020",
    marginBottom: "1.125rem",
    cursor: "pointer",
  },
  aContent: {
    lineHeight: "1.125rem",
    fontSize: "1rem",
    paddingLeft: "0.75rem",
    marginBottom: "0.5rem",
  },
  // article end

  // menu start
  menuWrapper: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "12px",
    paddingTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingTop: "12px",
    },
  },
  menuItemGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  menuItem: {
    cursor: "pointer",
    fontSize: "1.375rem",
    textTransform: "uppercase",
    padding: "4px 2rem",
    width: "6rem",
    fontWeight: 600,
    borderBottom: "2px solid white",
    textAlign: "center",
    "&:hover": {
      color: "#E02020",
      borderBottom: "2px solid #E02020",
    },
    [theme.breakpoints.down("md")]: {
      padding: "4px 1.25rem",
      width: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      width: "unset",
      padding: "4px 0",
    },
  },
  menuLogoWrapper: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  menuLogo: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    paddingRight: "5rem",
    paddingLeft: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      paddingLeft: 0,
      paddingBottom: "1rem",
    },
  },
  // menu end

  // event start
  eventWrapper: {
    marginBottom: "16px",
    paddingLeft: "0.75rem",
  },
  eventName: {
    lineHeight: "1.5rem",
    textTransform: "uppercase",
    fontSize: "1.125rem",
    fontWeight: 700,
    fontStyle: "italic",
  },
  eventExtraInfo: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  eventInfo: {
    display: "flex",
    alignItems: "center",
  },
  eventTime: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#7f7f7f",
    marginRight: "0.75rem",
    paddingRight: "0.75rem",
    borderRight: "1px solid #7f7f7f",
  },
  eventVenue: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#7f7f7f",
  },
  eventVenueLink: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#7f7f7f",
    cursor: "pointer",
    textDecorationLine: "none",
  },
  eventMoreInfo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  eventMoreInfoText: {
    lineHeight: "1.25rem",
    fontSize: "0.875rem",
    color: "#000",
    "&:hover": {
      textDecorationLine: "underline",
      color: "#E02020",
    },
  },
  eventRow: {
    marginTop: "6px",
    display: "flex",
    alignItems: "center",
  },
  eventPrice: {
    marginLeft: "16px",
    fontWeight: 700,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  eventOptionalIcon: {
    height: "36px",
    width: "36px",
    backgroundColor: "#333",
    borderRadius: "50%",
    display: "inline-block",
    textAlign: "center",
    color: "#fff",
    fontSize: "14px",
    lineHeight: "36px",
    fontWeight: 600,
    position: "absolute",
    top: "2px",
    left: "-18px",
  },
  eventOptional: {
    marginTop: "0.75rem",
    backgroundColor: "#FEFCE8",
    border: "1px solid #000",
    borderRadius: "2px",
    padding: "0.5rem 1rem 0.5rem 1.5rem",
    position: "relative",
    minHeight: "26px",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontStyle: "italic",
  },
  // event end

  // more button start
  mbWrapper: {
    padding: "8px 12px",
    borderRadius: "4px",
    border: "2px solid #000",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "1.125rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    "&:hover": {
      border: "2px solid #E02020",
      color: "#E02020",
    },
  },
  // more button end

  // footer start
  footerWrapper: {
    color: "#E5E7EB",
    backgroundColor: "#000000",
    padding: "3.5rem 2.5rem",
    marginTop: "4rem",
    fontSize: "0.875rem",
  },
  footerLogo: {
    cursor: "pointer",
    fontSize: "2.5rem",
    lineHeight: "1.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  footerLink: {
    color: "white",
    fontWeight: 500,
    marginLeft: "3px",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  footerTitle: {
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  footerItem: {
    color: "white",
    fontWeight: 400,
    marginBottom: "12px",
    cursor: "pointer",
  },
  // footer end

  // gig item start
  giWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
  },
  giTime: {
    position: "sticky",
    top: "1.25rem",
    textTransform: "uppercase",
    paddingRight: "2.125rem",
    paddingLeft: "1.125rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.125rem",
      paddingLeft: "1.125rem",
    },
  },
  giDay: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: 600,
    color: "#E02020",
  },
  giDate: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    fontWeight: 600,
    color: "#000000",
  },
  // gig item end

  // scroll top button start
  stbWrapper: {
    position: "fixed",
    bottom: "18px",
    right: "25px",
    padding: "0.5rem",
    borderRadius: "12px",
    backgroundColor: "#E02020",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  // scroll top button end

  // more info modal start
  mimButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    borderRadius: "6px",
    padding: "8px 0",
    cursor: "pointer",
    color: "#fff",
    fontWeight: 500,
    textDecorationLine: "none",
    backgroundColor: "#339AF0",
  },
  mimFacebook: {
    width: "30px",
    marginRight: "4px",
  },
  // more info modal end
}));

export default useStyles;
