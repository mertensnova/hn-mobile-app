let
  pkgs = import <nixpkgs> {};
in
  pkgs.mkShell {
    packages = [
     pkgs.nodejs_20
      pkgs.yarn


  ];
  }