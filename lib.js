
      var bklist = [];
      function addbook() {
        // alert("pressed addbook");
        document.getElementById("viewbooks").innerHTML = " ";
        console.log(document.getElementById("viewbooks"));
        let inp1 = document.createElement("input");
        inp1.placeholder = "Enter Book id";
        inp1.id = "bkid";
        document.getElementById("viewbooks").appendChild(inp1);

        let inp2 = document.createElement("input");
        inp2.placeholder = "Enter Book name";
        inp2.id = "bkname";
        document.getElementById("viewbooks").appendChild(inp2);

        let inp3 = document.createElement("input");
        inp3.placeholder = "Enter Book Author";
        inp3.id = "bkauthor";
        document.getElementById("viewbooks").appendChild(inp3);

        let inp4 = document.createElement("input");
        inp4.placeholder = "Enter Book Availability";
        inp4.id = "bkavail";
        document.getElementById("viewbooks").appendChild(inp4);

        let submit = document.createElement("button");
        let text = document.createTextNode("button");
        submit.append(text);
        submit.addEventListener("click", pushh);
        document.getElementById("viewbooks").appendChild(submit);

        function pushh() {
          console.log(
            "Reading the values from id",
            document.getElementById("bkid").value
          );
          var idid = document.getElementById("bkid").value;
          console.log("declaration value id ", idid);
          var idname = document.getElementById("bkname").value;
          console.log("declaration value name  ", idname);
          var idauthor = document.getElementById("bkauthor").value;
          console.log("declaration value author ", idauthor);
          var idaval = document.getElementById("bkavail").value;
          console.log("declaration value aval ", idaval);
          console.log("values in id", idid, idname, idauthor, idaval);
          document
            .getElementById("viewbooks")
            .append(idid, idname, idauthor, idaval);
            
          newbk = new book(idid, idname, idauthor, idaval);
        }
      }
      function Viewbook() {
        document.getElementById("viewbooks").innerHTML = "";

        bklist.forEach((item) => {
          // let divv = document.getElementById("display");
          let ele = document.createElement("pre");
          ele.innerHTML = `Id:${item.id}, Name: ${item.name}, Author :${item.author}, Availability : ${item.availability}`;
          console.log("ele ", ele);
          document.getElementById("viewbooks").appendChild(ele);
        });
      }

      class book {
        constructor(bkid, bkname, author, availability) {
          this.id = bkid;
          this.name = bkname;
          this.author = author;
          this.availability = availability;

          bklist.push({
            id: this.id,
            name: this.name,
            author: this.author,
            availability: this.availability,
          });
        }
      }
      bk1 = new book(1, "bk-name", "anonymous", "yes");
      bk2 = new book(1, "bk-name2", "Strange", "no");

      //   book.add.bind(bk1)
      //   bklist.push(bk1);
      //   console.log(bk1)

      //   bklist.push(new book(4,"Phillipians", "no"));
      //   console.log(bklist);

      //  bk1 = [new book(1, 2, 3)];
      //   bklist.push(bk1);//added 1 to the array
      //   bklist.push(new book(4, 5, 6));
      //   console.log("First console after 3 elements",bklist);//First Console gives 2 books and 1
      //   const bk = new book(0, 0, 0);
      //   console.log("2nd console for book3 ", bk)//
      //   console.log("3rd console for booklist",bklist)
      //   console.log("4th console pushing 3rd book",bklist.push(bk));
      //   console.log("5th console for booklist",bklist)
      //   bklist.push(bk);
      //   console.log("6th console after pushing book3 again",bklist)
 