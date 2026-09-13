import qrCode from 'qrcode-terminal';

interface QRCodeGenerator {
  generate: (
    url: string,
    options: { small: boolean },
    callback: (code: string) => void,
  ) => void;
}

const typedQRCode = qrCode as unknown as QRCodeGenerator;

export const getQRCode = (url: string): Promise<string> => {
  return new Promise((rs) => {
    typedQRCode.generate(url, { small: true }, (code: string) => {
      rs(code);
    });
  });
};
