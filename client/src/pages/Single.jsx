import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://i.pinimg.com/736x/c6/24/b9/c624b9ed4a302818465e60e2efbc9a6a.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="info">
            <span>Elif</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={"/write?edit=2"}>
              <AiOutlineEdit className="icon"></AiOutlineEdit>
            </Link>
            <Link className="link">
              <AiOutlineDelete className="icon"></AiOutlineDelete>
            </Link>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          rerum?
        </h1>
        <p1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          qui sint vitae sequi consequuntur alias est, quo provident distinctio
          maiores rem laboriosam nemo hic aut dolore eius illum commodi.Impedit
          nesciunt ea nam debitis ratione non quibusdam odio, optio molestiae
          omnis harum suscipit soluta ducimus dolorum inventore autem obcaecati
          officiis repudiandae esse nihil, iste tenetur quia ex explicabo.
          <br></br>
          <br></br>
          Natus quod harum tenetur veritatis fugit hic animi laudantium rem
          aliquid eius inventore velit quibusdam ratione laborum molestias nisi
          culpa explicabo earum, tempore officia nostrum et perspiciatis! Omnis
          hic sequi, at dolorem necessitatibus laboriosam quas distinctio
          veritatis ullam accusantium atque fuga debitis beatae aut culpa ex
          quisquam similique eveniet aliquid ad fugit deleniti? Ratione porro
          facilis fugit sit iste, in perspiciatis modi aut, qui ipsa commodi
          tenetur ad quasi aspernatur odit.
          <br></br>
          <br></br>Mollitia, saepe in dicta harum tempore quaerat ullam quas
          molestias ipsam dignissimos sequi blanditiis voluptas commodi,
          laudantium possimus sit doloremque id distinctio quam sed nobis enim
          eum temporibus maiores? Optio voluptatibus officia dolorem quod
          necessitatibus. Atque libero deleniti autem quo voluptatibus. Incidunt
          earum tempore inventore at minima ratione fuga non officiis doloribus
          mollitia vitae natus quaerat magni aspernatur ipsum veniam sint,
          nesciunt qui. Inventore ex, voluptatibus eos accusantium doloribus
          reprehenderit id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam eveniet officia laboriosam illo optio dicta eius consequuntur excepturi, atque ducimus, perferendis culpa facilis dolorem at facere?
          <br></br>
          Soluta, eius harum deserunt hic obcaecati blanditiis. Totam, adipisci incidunt asperiores perspiciatis dolorum consectetur maiores aut est error consequuntur libero repellat quisquam atque ipsam fuga, esse unde ab. Vel quod accusamus adipisci alias delectus sequi in harum quibusdam. Mollitia commodi in ipsum amet voluptas delectus cum. Eveniet, dignissimos? Molestiae mollitia dolor, cupiditate iusto eum adipisci, illo pariatur incidunt expedita amet ullam magnam eveniet delectus consequuntur aliquid. Laudantium autem sed voluptate labore delectus omnis.
        </p1>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Single;
