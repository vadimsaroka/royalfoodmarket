const error = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="robots" content="noarchive">
      <title>404 - Page Not Found</title>
  
      <style type="text/css">
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        body {
          background-color: #F8F8F8;
        }

        .warning-container {
          width: 30rem;
          height: 15rem;
          border: 1px solid #D4D4D4;
          padding: 4rem 2rem;
          margin: 10% auto;
          text-align: center;
          background-color: #fff;
        }

        .warning-container__header {
          color: #363B3E;
          font-size: 50px;
          font-weight: 400;
        }

        .warning-container__error {
          color: #9BA0A3;
          margin-bottom: 30px;
        }

        hr {
          border: 1px solid #E7E7E7;
          border-top: 0;
        }

        .warning-container__bottom-content {
          margin-top: 30px;
          height: 120px;
          line-height: 45px;
        }

        .warning-container__check-url,
        .warning-container__otherwise {
          color: #666C70;
        }

        .warning-container__check-url {
          font-weight: 600;
        }

        a {
          text-decoration: none;
          color: #c69963;
        }
        a:hover {
          color: #b28451;
        }

        @media only screen and (max-width: 600px) {
          .warning-container {
            width: 324px;
            height: 142px;
            padding: 25px 0;
          }

          .warning-container__header {
            font-size: 30px;
          }

          .warning-container__error {
            margin-bottom: 15px;
            font-size: 12px;
          }

          .warning-container__check-url,
          .warning-container__otherwise {
            font-size: 12px;
          }

          .warning-container__bottom-content {
            margin-top: 10px;
            height: 100px;
            line-height: 30px;
          }
        }

        @media only screen and (max-width: 375px) {
          .warning-container {
            width: 287px;
            height: 120px;
            padding: 20px 0;
          }

          .warning-container__header {
            font-size: 25px;
          }

          .warning-container__bottom-content {
            margin-top: 5px;
            height: 80px;
            line-height: 25px;
          }

          .warning-container__error {
            margin-bottom: 5px;
            font-size: 10px;
          }

          .warning-container__check-url,
          .warning-container__otherwise {
            font-size: 10px;
          }


        }
      </style>
    </head>
    <body>
    <div class="warning-container">
    <h2 class="warning-container__header">404</h2>
    <p class="warning-container__error">Error - Page Not Found</p>
    <hr>
    <div class="warning-container__bottom-content">
        <span>
          <p class="warning-container__check-url">Please check the URL.</p>
          <p class="warning-container__otherwise">Otherwise, <a href="/">click here</a> to be redirected to the homepage.</p>
        </span>
    </div>
  </div>
    </body>
  </html>
`;

module.exports = error;