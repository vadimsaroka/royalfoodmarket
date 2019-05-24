const success = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="robots" content="noarchive">
      <title>Success message</title>
  
      <style type="text/css">
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        .container {
          width: 100%;
          background-image: linear-gradient(100deg, rgba(16, 29, 44, 0.7) 100%, transparent 100%), url(../img/message.jpg);
          height: 100vh;
          display: grid;
          grid-template-rows: max-content 1fr;
          justify-content: center;
          text-align: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .container__logo {
          background-color: #101d2c;
          width: 100vw;
          padding: 30px 0;
          display: grid;
          align-items: center;
          color: #c69963;
          font-size: 44px;
        }

        .container__content {
          align-self: center;
        }

        h2 {
          padding: 30px 0;
          color: #f9f7f6;
          font-size: 30px;
          font-weight: inherit;
        }

        p {
          font-size: 20px;
          color: #f9f7f6;
        }

        .conainer__button {
          display: inline-block;
          border: none;
          text-decoration: none;
          background-color: #f9f7f6;
          padding: 10px 20px;
          border-radius: 4px;
          margin-top: 25px;
          color: #101d2c;
          outline: none;
          box-shadow: 0 3px 5px rgb(198, 153, 99);
          transition: all 0.3s;
        }

        .conainer__button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 10px rgb(198, 153, 99);
        }

        .conainer__button:active {
          transform: translateY(0px);
          box-shadow: 0 3px 5px rgb(198, 153, 99);
        }

        @media only screen and (max-width: 600px) {
          .container {
            background-image: linear-gradient(100deg, rgba(16, 29, 44, 0.7) 100%, transparent 100%), url(../img/small_message.jpg);
          }
          .container__logo {
            font-size: 30px;
            padding: 20px 0;
          }

          h2 {
            padding: 20px 0;
            font-size: 25px;
          }

          p {
            font-size: 15px;
          }
          .conainer__button {
            padding: 5px 10px;
            font-size: 15px;
          }
        }

        @media only screen and (max-width: 400px) {
          .container {
            background-image: linear-gradient(100deg, rgba(16, 29, 44, 0.7) 100%, transparent 100%), url(../img/smallest_message.jpg);
          }

          .container__logo {
            font-size: 25px;
            padding: 15px 0;
          }

          h2 {
            padding: 15px 0;
            font-size: 20px;
          }

          p {
            font-size: 12px;
          }
          .conainer__button {
            padding: 3px 5px;
            font-size: 12px;
          }
        }

        @media only screen and (max-width: 200px) {
          .container {
            background-image: linear-gradient(100deg, rgba(16, 29, 44, 0.95) 100%, transparent 100%);
          }

          .container__logo {
            font-size: 13px;
            padding: 10px 0;
          }

          h2 {
            padding: 10px 0;
            font-size: 12px;
          }

          p {
            font-size: 8px;
          }
          .conainer__button {
            font-size: 8px;
          }
        }

      </style>
    </head>
    <body>
    <div class="container">
        <div class="container__logo">Baywood Capital</div>
        <div class="container__content">
          <h2>Thanks!</h2>
          <p>Your request was successfully sent. We'll be in touch with you soon</p>
          <a href="/" class="conainer__button">&larr; Go Back</a>
        </div>
    </div>
    </body>
  </html>
`;

module.exports = success;