public static void space(int i, int width) {
  space(String.valueOf(i), width);
}

public static void space(int width) {
  space("", width);
}

public static void space(String str, int width) {
  for (int x = str.length(); x < width; x++) {
    System.out.print(' ');
  }
  System.out.print(str);
}