# File Management Platform

Welcome to our File Management Platform! This project provides a simple yet robust platform for users to upload, manage, and view files. Whether you're looking to organize your documents, share images, or collaborate on projects, our platform has you covered.

## Features

- **User Authentication**: Secure user authentication via tokens ensures that only authorized users can access their files and data.
- **File Upload**: Easily upload files of various types, including images, documents, and more, with support for thumbnail generation for images.
- **File Management**: Organize your files into folders, manage permissions, and view detailed information about each file.
- **API Endpoints**: Comprehensive API endpoints allow seamless integration with external applications and services.
- **System Status**: Monitor the health of the system with status and statistics endpoints, providing insights into the connectivity of Redis and MongoDB, as well as the number of users and files in the database.
- **Pagination**: Effortlessly navigate through your files with pagination support, ensuring smooth performance even with large datasets.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/benkivuva/alx-files_manager
   ```

2. Install dependencies:

   ```bash
   cd file-management-platform
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file based on the provided `.env.example` file.
   - Customize environment variables such as `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `PORT`, `FOLDER_PATH`, etc., as needed.

4. Start the server:

   ```bash
   npm start
   ```

5. Access the platform at `http://localhost:5000` (or the configured port).

## Usage

### API Documentation

For detailed information on available endpoints and their usage, please refer to the [API documentation](API.md).

### Testing

To run tests:

```bash
npm test
```

## Contributing

We welcome contributions from the community! If you have any ideas for improvements, bug fixes, or new features, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

This project was created with ❤️ by Benson Kaunda. Special thanks to ALX Africa.
