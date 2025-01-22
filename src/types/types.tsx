export type TGeneralProps = {
  children?: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export type TComponentProps = {
  children?: React.ReactNode;
  lang: string;
};
