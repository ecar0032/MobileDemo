import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import {
  Card,
  TouchableRipple,
  Button,
  Snackbar,
  Title,
  Paragraph,
  List,
  Banner,
  Portal,
  Dialog,
  Provider,
} from 'react-native-paper';

export default function App() {


  const [bookmarks, setBookmarks] = React.useState([]);
  const [bookmarkToDelete, setBookmarkToDelete] = React.useState('');

  let numberOfBookmarks = bookmarks.length;
  let bookmarksJSX = bookmarks.map((bookmark) => (
    <List.Item
      title={bookmark}
      onPress={() => {
        //remove bookmark from list when clicked
        removeBookmark(bookmark);
      }}
    />
  ));

  function addBookmark(article) {
    if (bookmarks.length < 3) {
      setBookmarks([...bookmarks, article]);
      //show snackbar
      onToggleSnackBar();
    } else {
      //bookmark list is full
      //show error banner
      setVisibleBanner(true);
    }
  }

  function removeBookmark(article) {
    //show alert dialog to confirm delete
    setBookmarkToDelete(article);
    setVisibleDialog(true);
  }

  //snackbar
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  //banner
  const [visibleBanner, setVisibleBanner] = React.useState(false);

  //alert dialog
  const [visibleDialog, setVisibleDialog] = React.useState(false);
  const hideDialog = () => setVisibleDialog(false);

  

  return (
    <ScrollView style={styles.container}>
      <Banner
        visible={visibleBanner}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisibleBanner(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisibleBanner(false),
          },
        ]}>
        There was a problem while adding bookmark. Your bookmark list full.
      </Banner>

      <Provider>
        <Portal>
          <Dialog visible={visibleDialog} onDismiss={hideDialog}>
            <Dialog.Content>
              <Paragraph>
                Do you want to delete the bookmark for {bookmarkToDelete}
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisibleDialog(false)}>Cancel</Button>
              <Button
                onPress={() => {
                  setBookmarks(
                    bookmarks.filter((item) => item !== bookmarkToDelete)
                  );
                  setVisibleDialog(false);
                }}>
                Delete
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Card style={styles.card}>
          <Card.Title title="Trump impeached...AGAIN" />
          <Card.Content></Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/500' }} />
          <Card.Actions>
            <Button
              onPress={() => {
                addBookmark('Trump impeached...AGAIN');
              }}>
              Bookmark
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Waves are in the sea." />
          <Card.Content></Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
          <Card.Actions>
            <Button
              onPress={() => {
                addBookmark('Waves are in the sea.');
              }}>
              Bookmark
            </Button>
          </Card.Actions>
        </Card>

        {numberOfBookmarks == 0 ? (
          <Card>
            <View>
              <Text>You not yet have any bookmarks.</Text>
            </View>
          </Card>
        ) : (
          <List.Section>
            <List.Subheader>My bookmarks {bookmarks.length}/3</List.Subheader>
            {bookmarksJSX}
          </List.Section>
        )}

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Dismiss',
            onPress: () => {
              onDismissSnackBar();
            },
          }}>
          Your bookmark was added!
        </Snackbar>
      </Provider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    margin: 12,
  },
});
