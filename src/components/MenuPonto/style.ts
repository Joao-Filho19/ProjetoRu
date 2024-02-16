import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  menuButton: {
    padding: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 8,
    marginTop: 10,
  },
  profileImage: {
    borderRadius: 90,
    overflow: 'hidden',
  },

  infoContainer: {
    marginTop: 10,
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 5,
    marginBottom: 16,
    marginTop: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -10,
    color: '#000000',
  },
  input: {
    fontSize: 16,
    color: '#808080',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    padding: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000',
    alignSelf: 'center',
    marginTop: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
    alignSelf: 'center',
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
