to build, run

```sh
poole --build --output ../
```

to build the website and put it at the `wcchin.github.io` directory



if the project page not change, remember to copy the files:

```sh
cp -r ../.ivy_generator/out ../projects
```

or, move to the ivy generator to modify and generate project pages:

```sh
cd ../.ivy_generator
```



to see results

```sh
poole --serve --output ../
```

open a webpage at `localhost:8080`

