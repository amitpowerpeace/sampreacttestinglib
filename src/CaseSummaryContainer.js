/* eslint-disable */
import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
//import './App.css';
import allActions from './components/actions';

//import TableContainer from "@material-ui/core/TableContainer";
//import Paper from "@material-ui/core/Paper";
import {
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  //Drawer,
  //Avatar
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    //display: 'grid',
    //gridTemplateRows: '60px auto 50px',
    margin: '24px auto 0px auto',
    height: '90vh',
    maxWidth: '1000px',
    padding: '16px',
    color: 'black',
  },
  cardHeader: {
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: '1px solid lightgray',
  },
  auditCard: {
    fontSize: 11,
    marginBottom: 10,
  },
  fieldValue: {
    fontWeight: 700,
    marginBottom: 20,
    whiteSpace: 'pre-wrap',
  },
  tableRow: {
    height: 30,
  },
  tableCell: {
    fontSize: 11,
    border: 0,
  },
  tableContianer: {
    backgroundColor: '#F5F7F9',
    padding: 10,
    marginBottom: 5,
  },
  sectionHeaderStyle: {
    fontSize: 14,
    fontWeight: 700,
  },
  blueAvatar: {
    backgroundColor: '#1F96F3',
    width: 30,
    height: 30,
  },
  greenAvatar: {
    backgroundColor: '#009688',
    width: 30,
    height: 30,
  },
  fabStyle: {
    position: 'fixed',
    bottom: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
    right: '22%',
  },
  fabRootStyle: {
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'gray',
    },
  },
  downloadButtonAction: {
    backgroundColor: '#1976D1',
    '&:hover': {
      backgroundColor: '#1976D1',
    },
    color: 'white',
  },
  historyButtonAction: {
    backgroundColor: '#4CAF50',
    '&:hover': {
      backgroundColor: '#4CAF50',
    },
    color: 'white',
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [showFabButtons, setShowFabButtons] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);
  console.log('currentUser', currentUser);

  const user = { name: 'Rei' };
  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);

  const valuesAudit = [
    {
      columns: [
        'Provider Number',
        'Proivder Name',
        'Provider Role',
        'Provider Speciality',
        'Participation Status',
      ],
      rows: [
        {
          participationStatus: 'Yes',
          providerName: 'Dougas Gardern',
          providerNumber: '211',
          providerRole: 'Treating Physician',
          providerSpeciality: 'Hospital acture',
        },
      ],
      format: 'table',
    },
    {
      format: 'multiSection',
      label: 'Services',
      description: [
        [
          {
            lineItems: {
              columns: [
                'Provider Number',
                'Proivder Name',
                'Provider Role',
                'Provider Speciality',
                'Participation Status',
              ],
              rows: [
                {
                  participationStatus: 'Yes',
                  providerName: 'Dougas Gardern',
                  providerNumber: '211',
                  providerRole: 'Treating Physician',
                  providerSpeciality: 'Hospital acture',
                },
              ],
            },
          },
          {
            title: 'auth-services',
            content: '',
            ui: {
              className: 'sectionHeaderStyle',
              icon: { name: 'faUserMd', color: 'green' },
              width: 12,
            },
          },
          {
            title: '  Services Start Date',
            content: null,
            lineItems: {
              columns: [
                'Provider Number',
                'Proivder Name',
                'Provider Role',
                'Provider Speciality',
                'Participation Status',
              ],
              rows: [
                {
                  participationStatus: 'Yes',
                  providerName: 'Dougas Gardern',
                  providerNumber: '211',
                  providerRole: 'Treating Physician',
                  providerSpeciality: 'Hospital acture',
                },
              ],
            },
          },
          {
            title: '  Services End Date',
            content: null,
          },
          {
            title: '  Place of Service',
            content: null,
          },
          {
            title: 'auth-services',
            content: '',
            ui: {
              className: 'sectionHeaderStyle',
              icon: { name: 'faUserMd', color: 'green' },
              width: 12,
            },
          },
          {
            title: '  Services Start Date',
            content: null,
          },
          {
            title: '  Services End Date',
            content: null,
          },
          {
            title: '  Place of Service',
            content: null,
          },
          {
            title: 'auth-services',
            content: '',
            ui: {
              className: 'sectionHeaderStyle',
              icon: { name: 'faUserMd', color: 'green' },
              width: 12,
            },
          },
          {
            title: '  Services Start Date',
            content: null,
          },
          {
            title: '  Services End Date',
            content: null,
          },
          {
            title: '  Place of Service',
            content: null,
          },
        ],
        [
          {
            title: 'auth-services',
            content: '',
            ui: {
              className: 'sectionHeaderStyle',
              icon: { name: 'faUserMd', color: 'green' },
              width: 12,
            },
          },
          {
            title: '  Services Start Date',
            content: null,
            lineItems: {
              columns: [
                'Provider Number',
                'Proivder Name',
                'Provider Role',
                'Provider Speciality',
                'Participation Status',
              ],
              rows: [
                {
                  participationStatus: 'Yes',
                  providerName: 'Dougas Gardern',
                  providerNumber: '211',
                  providerRole: 'Treating Physician',
                  providerSpeciality: 'Hospital acture',
                },
              ],
            },
          },
          {
            title: '  Services End Date',
            content: null,
          },
          {
            title: '  Place of Service',
            content: null,
          },
          {
            title: 'auth-services',
            content: '',
            ui: {
              className: 'sectionHeaderStyle',
              icon: { name: 'faUserMd', color: 'green' },
              width: 12,
            },
          },
          {
            title: '  Services Start Date',
            content: null,
          },
          {
            title: '  Services End Date',
            content: null,
          },
          {
            title: '  Place of Service',
            content: null,
          },
          {
            title: 'auth-services',
            content: '',
            ui: {
              className: 'sectionHeaderStyle',
              icon: { name: 'faUserMd', color: 'green' },
              width: 12,
            },
          },
          {
            title: '  Services Start Date',
            content: null,
          },
          {
            title: '  Services End Date',
            content: null,
          },
          {
            title: '  Place of Service',
            content: null,
          },
        ],
      ],
    },
  ];

  const renderMultiSection = (item, key) => {
    //const classes = useStyles();
    if (item.description.length === 0) {
      return null;
    }
    return (
      <Card className={classes.auditCard} key={key}>
        <CardContent>
          <Grid container>
            <Grid item xs={12} className={classes.cardHeader}>
              {item.label}
            </Grid>
            {item.description &&
              item.description &&
              item.description.map((section, sectionIndex) => {
                return (
                  <Grid
                    container
                    item
                    xs={12}
                    key={sectionIndex}
                    style={{ marginBottom: 20 }}
                  >
                    {section.map &&
                      section.map((subItem, itemIndex) => {
                        return (
                          <Grid
                            item
                            xs={
                              subItem.ui && subItem.ui.width
                                ? subItem.ui.width
                                : 3
                            }
                            key={itemIndex}
                            className={
                              subItem.ui && subItem.ui.className
                                ? classes[subItem.ui.className]
                                : null
                            }
                          >
                            <Grid container alignItems="center">
                              {subItem.ui && subItem.ui.icon ? (
                                <Grid item style={{ paddingRight: 10 }}>
                                  {/*  {getIcon(subItem.ui.icon)} */}
                                </Grid>
                              ) : null}
                              <Grid item>{subItem.title}</Grid>
                            </Grid>
                            <div className={classes.fieldValue}>
                              {subItem.content}
                            </div>
                          </Grid>
                        );
                      })}
                    {section.lineItems && renderTableMarkup(section.lineItems)}
                  </Grid>
                );
              })}
          </Grid>
        </CardContent>
      </Card>
    );
  };
  const renderTableMarkup = (item) => {
    // const classes = useStyles();
    return (
      <Grid item xs={12} className={classes.tableContianer}>
        <Table>
          <TableHead>
            <TableRow classes={{ root: classes.tableRow }}>
              {item.columns &&
                item.columns.map((subItem, index) => {
                  return (
                    <TableCell padding="none" key={index}>
                      {subItem}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {item.rows.map((row, index) => (
              <TableRow key={index} classes={{ root: classes.tableRow }}>
                {Object.keys(row).map((key, index) => {
                  return (
                    <TableCell
                      padding="none"
                      key={index}
                      classes={{ root: classes.tableCell }}
                    >
                      {row[key]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    );
  };
  const renderTable = (item, key) => {
    /* if (item.description.length === 0) {
      return null;
    } */
    return (
      <Card className={classes.auditCard} key={key}>
        <CardContent>
          <Grid container>
            <Grid item xs={12} className={classes.cardHeader}>
              {item.label}
            </Grid>
            {renderTableMarkup(item)}
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <div data-testid="case-route" className={classes.container}>
      <div className="App">
        {/* {currentUser.loggedIn ? (
          <>
            <h1>Hello, {currentUser.user.name}</h1>
            <button onClick={() => dispatch(allActions.userActions.logOut())}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <button
              onClick={() => dispatch(allActions.userActions.setUser(user))}
            >
              Login as Rei
            </button>
          </>
        )} */}
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(allActions.counterActions.increment())}>
          Increase Counter
        </button>
        <button onClick={() => dispatch(allActions.counterActions.decrement())}>
          Decrease Counter
        </button>
      </div>

      {valuesAudit &&
        valuesAudit.length > 0 &&
        valuesAudit.map((item, index) => {
          switch (item.format) {
            case 'table':
              return renderTable(item, index);
            case 'multiSection':
              return renderMultiSection(item, index);

            default:
            //return renderCard(item, index);
          }
          return 0;
        })}
    </div>
  );
}
