type ProfileHeaderProps = {
  image: string;
  introduction: string;
  description: string;
};
type PersonalProfileProps = {
  image: string;
  introduction: string;
  description: string;
  labels: Label[];
  children: React.ReactNode;
};

type Label = {
  title: string;
  icons: Icon[];
};
type Icon = {
  icon: string;
  href: string;
};
type Card = {
  title: string;
  list: string[];
};
